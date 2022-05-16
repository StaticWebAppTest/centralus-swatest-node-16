module.exports = async function (context, req) {
  const date = "2022-05-16T07:14:09.550Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

