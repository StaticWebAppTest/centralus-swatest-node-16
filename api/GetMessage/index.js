module.exports = async function (context, req) {
  const date = "2022-10-11T21:13:23.581Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

