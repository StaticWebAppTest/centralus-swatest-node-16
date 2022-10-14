module.exports = async function (context, req) {
  const date = "2022-10-14T18:17:27.048Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

