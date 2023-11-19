module.exports = async function (context, req) {
  const date = "2023-11-19T05:08:29.731Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

