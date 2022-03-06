module.exports = async function (context, req) {
  const date = "2022-03-06T12:15:08.974Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

