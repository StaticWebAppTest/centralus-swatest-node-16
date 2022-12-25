module.exports = async function (context, req) {
  const date = "2022-12-25T17:07:38.686Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

