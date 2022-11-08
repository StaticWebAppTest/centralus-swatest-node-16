module.exports = async function (context, req) {
  const date = "2022-11-08T17:20:07.677Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

