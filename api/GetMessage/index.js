module.exports = async function (context, req) {
  const date = "2024-09-11T13:18:02.779Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

