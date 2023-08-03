module.exports = async function (context, req) {
  const date = "2023-08-03T15:09:08.128Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

