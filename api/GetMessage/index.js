module.exports = async function (context, req) {
  const date = "2023-10-05T13:13:38.712Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

