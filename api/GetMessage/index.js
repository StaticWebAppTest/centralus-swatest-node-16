module.exports = async function (context, req) {
  const date = "2022-09-11T15:12:06.686Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

