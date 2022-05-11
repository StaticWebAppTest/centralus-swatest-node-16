module.exports = async function (context, req) {
  const date = "2022-05-11T17:23:53.169Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

