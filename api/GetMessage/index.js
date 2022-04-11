module.exports = async function (context, req) {
  const date = "2022-04-11T07:11:08.067Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

