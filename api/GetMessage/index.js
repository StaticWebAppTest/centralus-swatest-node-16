module.exports = async function (context, req) {
  const date = "2022-03-12T18:11:21.981Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

