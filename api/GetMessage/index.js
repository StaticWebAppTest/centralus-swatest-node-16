module.exports = async function (context, req) {
  const date = "2022-11-03T09:11:54.058Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

