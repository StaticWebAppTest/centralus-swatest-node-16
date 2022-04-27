module.exports = async function (context, req) {
  const date = "2022-04-27T07:10:37.437Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

