module.exports = async function (context, req) {
  const date = "2022-04-23T09:10:07.992Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

