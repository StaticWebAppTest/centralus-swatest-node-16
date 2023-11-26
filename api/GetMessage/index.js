module.exports = async function (context, req) {
  const date = "2023-11-26T06:11:20.712Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

