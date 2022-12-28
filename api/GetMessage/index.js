module.exports = async function (context, req) {
  const date = "2022-12-28T10:10:09.447Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

