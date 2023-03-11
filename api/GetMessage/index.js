module.exports = async function (context, req) {
  const date = "2023-03-11T17:08:06.128Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

