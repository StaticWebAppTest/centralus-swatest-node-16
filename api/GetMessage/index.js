module.exports = async function (context, req) {
  const date = "2022-09-10T20:12:18.570Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

