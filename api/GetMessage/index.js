module.exports = async function (context, req) {
  const date = "2022-07-27T16:15:25.437Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

