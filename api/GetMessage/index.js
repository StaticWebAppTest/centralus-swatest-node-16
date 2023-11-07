module.exports = async function (context, req) {
  const date = "2023-11-07T10:09:36.712Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

