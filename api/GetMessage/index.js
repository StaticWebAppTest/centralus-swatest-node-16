module.exports = async function (context, req) {
  const date = "2023-09-12T17:08:00.570Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

