module.exports = async function (context, req) {
  const date = "2022-12-14T23:09:53.447Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

