module.exports = async function (context, req) {
  const date = "2023-09-26T05:08:23.731Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

