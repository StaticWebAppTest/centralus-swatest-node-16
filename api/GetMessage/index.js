module.exports = async function (context, req) {
  const date = "2022-09-29T09:19:45.167Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

