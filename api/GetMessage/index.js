module.exports = async function (context, req) {
  const date = "2022-12-20T09:10:07.579Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

