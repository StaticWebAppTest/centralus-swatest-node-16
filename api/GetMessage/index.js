module.exports = async function (context, req) {
  const date = "2023-01-28T06:11:19.267Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

