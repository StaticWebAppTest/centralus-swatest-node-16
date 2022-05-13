module.exports = async function (context, req) {
  const date = "2022-05-13T21:10:08.079Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

