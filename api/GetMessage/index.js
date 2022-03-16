module.exports = async function (context, req) {
  const date = "2022-03-16T23:10:08.802Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

