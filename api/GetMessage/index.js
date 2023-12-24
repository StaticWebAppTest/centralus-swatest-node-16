module.exports = async function (context, req) {
  const date = "2023-12-24T04:11:01.067Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

