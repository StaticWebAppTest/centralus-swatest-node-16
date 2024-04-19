module.exports = async function (context, req) {
  const date = "2024-04-19T23:11:07.570Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

