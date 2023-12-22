module.exports = async function (context, req) {
  const date = "2023-12-22T05:09:12.731Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

