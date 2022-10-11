module.exports = async function (context, req) {
  const date = "2022-10-11T12:28:22.370Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

