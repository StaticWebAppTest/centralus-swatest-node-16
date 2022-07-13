module.exports = async function (context, req) {
  const date = "2022-07-13T17:18:02.715Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

