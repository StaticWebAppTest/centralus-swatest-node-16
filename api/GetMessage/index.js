module.exports = async function (context, req) {
  const date = "2022-06-22T13:31:27.570Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

