module.exports = async function (context, req) {
  const date = "2022-04-03T09:10:11.364Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

