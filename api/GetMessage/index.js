module.exports = async function (context, req) {
  const date = "2023-06-14T21:07:53.570Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

