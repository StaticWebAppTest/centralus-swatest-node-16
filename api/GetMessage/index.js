module.exports = async function (context, req) {
  const date = "2022-05-11T21:10:00.478Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

