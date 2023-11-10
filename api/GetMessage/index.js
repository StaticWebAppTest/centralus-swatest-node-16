module.exports = async function (context, req) {
  const date = "2023-11-10T03:09:31.570Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

