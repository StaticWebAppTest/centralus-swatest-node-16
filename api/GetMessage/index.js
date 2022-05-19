module.exports = async function (context, req) {
  const date = "2022-05-19T12:20:04.874Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

