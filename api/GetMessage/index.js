module.exports = async function (context, req) {
  const date = "2023-08-17T07:07:44.570Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

