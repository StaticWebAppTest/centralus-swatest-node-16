module.exports = async function (context, req) {
  const date = "2022-04-02T20:10:19.437Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

