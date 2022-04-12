module.exports = async function (context, req) {
  const date = "2022-04-12T13:23:31.058Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

