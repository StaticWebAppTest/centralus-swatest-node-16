module.exports = async function (context, req) {
  const date = "2023-07-14T17:08:33.495Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

