module.exports = async function (context, req) {
  const date = "2024-08-10T09:10:49.570Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

