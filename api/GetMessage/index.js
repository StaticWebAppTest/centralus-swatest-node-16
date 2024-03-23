module.exports = async function (context, req) {
  const date = "2024-03-23T15:10:46.570Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

