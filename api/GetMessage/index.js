module.exports = async function (context, req) {
  const date = "2022-03-01T14:09:45.287Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

