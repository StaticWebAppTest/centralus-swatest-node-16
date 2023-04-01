module.exports = async function (context, req) {
  const date = "2023-04-01T05:07:48.731Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

