module.exports = async function (context, req) {
  const date = "2024-04-11T05:09:37.539Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

