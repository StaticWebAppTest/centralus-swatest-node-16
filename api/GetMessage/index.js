module.exports = async function (context, req) {
  const date = "2023-07-11T08:13:35.211Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

