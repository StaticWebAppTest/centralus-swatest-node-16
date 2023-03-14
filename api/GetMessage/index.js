module.exports = async function (context, req) {
  const date = "2023-03-14T13:28:21.973Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

